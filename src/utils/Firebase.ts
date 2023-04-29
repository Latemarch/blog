import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from 'firebase/database'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { IPost, IProj, IUser } from '../type'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  authDomain: 'blog-eba42.firebaseapp.com',
  // databaseURL: process.env.REACT_APP_FIREBASE_DB_UR,
  databaseURL:
    'https://blog-eba42-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // projectId: "blog-eba42 ",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()
const database = getDatabase()
const dbRef = ref(getDatabase(app))

const isLocal = true
export async function logIn() {
  signInWithPopup(auth, provider).catch(console.error)
}

export async function logOut() {
  signOut(auth)
    .then((res) => console.log(res))
    .catch(console.error)
}
export function onUserStateChange(callback: (user: IUser | undefined) => void) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const { photoURL, uid, email, displayName } = user
      const sortedUser = { isAdmin, photoURL, uid, email, displayName }
      const updatedUser = await isAdmin(sortedUser)
      callback(updatedUser)
    } else {
      const updatedUser = undefined
      console.log('user logOut watching')
      callback(updatedUser)
    }
  })
}

export async function isAdmin(user: IUser) {
  return get(child(dbRef, 'admins')) //
    .then((snapshot) => {
      const admins = snapshot.val()
      const isAdmin = admins.includes(user?.uid)
      return { ...user, isAdmin }
    })
}

export function addItem(item: IPost | IProj) {
  const id = item.id
    ? item.id
    : `${item.title.toLowerCase().trim().replace(/\s+/g, '-')}`

  return set(
    ref(database, `${item.category}/${id}`), //
    {
      ...item,
      id,
      createdAt: Date.now(),
    },
  )
}

export async function getItems(item: string): Promise<any[]> {
  if (isLocal) {
    return await fetch(`/datas/${item}.json`) //
      .then((data) => data.json())
      .then((obj) => Object.values(obj).map((el) => el))
  } else {
    const snapshot = await get(child(dbRef, item))
    if (snapshot.exists()) {
      const data: any[] = Object.values(snapshot.val())
      return data
    }
    return []
  }
}

export async function getItem(
  id: string | undefined,
  category: string,
): Promise<any> {
  if (isLocal) {
    return await fetch(`/datas/${category}.json`) //
      .then((data) => data.json())
      .then((obj) => id && obj[id])
  } else {
    const snapshot = await get(child(dbRef, `${category}/${id}`))
    const item = snapshot.val()
    return item
  }
}

export async function updateItem(newData: any) {
  return update(dbRef, { [`${newData.category}/${newData.id}`]: newData })
    .then(() => console.log('updated'))
    .catch(console.log)
}
export function removeItem(item: IPost | IProj) {
  return remove(ref(database, `${item.category}/${item.id}`))
}
