import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'
import usePost from '../hooks/usePost'
import { v4 as uuid } from 'uuid'
import { AiFillFolderOpen, AiOutlineMail } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import useProject from '../hooks/useProject'

export default function Home() {
  const {
    postQuery: { data: posts },
  } = usePost()
  const {
    projectQuery: { data: projects },
  } = useProject()
  return (
    <div className="pb-20 text-zinc-600 dark:text-zinc-400">
      <h1 className="text-4xl mb-4 text-h1 dark:text-Dh1">
        개발 블로그가 되고싶은 개발 공부 블로그
      </h1>
      <span>
        방문해 주셔서 감사합니다. 이 블로그에 제가 프론트엔드 개발자로써 필요한
        스택들을 갖추는 과정을 기록했습니다. 스택들에 대한 정보를 담은 글,
        그리고 진행했던 프로젝트의 일부와 그 설명을 보실 수 있습니다.
      </span>
      <div className="flex space-x-3 mt-4 items-center">
        <a href="https://github.com/latemarch" target="_blank">
          <BsGithub />
        </a>
        {/* <BsTwitter /> */}
        {/* <AiOutlineInstagram /> */}
        <div className="flex items-center gap-1">
          <AiOutlineMail />
          <p>naturalcall1313@gmail.com</p>
        </div>
      </div>
      <div className="my-20">
        <div className="mx-2 mb-4 flex text-lg">Posts</div>
        <ul className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700/40">
          {posts &&
            posts
              .sort((a, b) => b.createdAt - a.createdAt)
              .slice(0, 3)
              .map((post) => <PostCard key={post.id} post={post} />)}
        </ul>
      </div>

      <div className="border border-zinc-300/40 dark:border-zinc-700/40 rounded-2xl p-6 pt-2">
        <div className="flex items-center mb-3">
          <AiFillFolderOpen />
          <p className="text-zinc-600 dark:text-zinc-300 ml-2">Works</p>
        </div>
        <ul className="grid xs:grid-cols-2 gap-4 lg:grid-cols-3">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </ul>
      </div>
    </div>
    // <div className="w-full h-full home text-white text-justify">
    // 	<h1 className="text-3xl">Motivation</h1>
    // 	<span className="text-xl">dljwldj</span>
    // </div>
  )
}
