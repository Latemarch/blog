/**
 * You can import this function in the parent component, pass the array and style to the function, then pass it as a prop to the child component. In the child component, you can pass the element to the function as an argument to search for it in the array.
 * @param array:string[]
 * @param style:CSSProperties
 * @returns CSSProperties
 */
export function getStyle(array: string[], style: React.CSSProperties) {
	return function (el: string) {
		if (!el) return {};
		if (!array) return {};
		return array.includes(el) ? style : {};
	};
}
