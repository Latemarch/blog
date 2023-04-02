import logo from "../svgs/react.svg";
import { BsGithub } from "react-icons/bs";
export default function About() {
	return (
		<section className="grid grid-cols-1 gap-y-16 mt-16 lg:grid-cols-2 lg:grid-rows-fr">
			<div className="max-w-xs lg:pl-20 px-2.5 lg:max-w-none">
				<img src={logo} />
			</div>
			<div className="lg:order-first lg:row-span-2">
				<h1 className="font-bold text-4xl tracking-tight">
					I’m Spencer Sharp. I live in New York City, where I design the future.
				</h1>
				<div className="space-y-7 text-justify">
					<span className="flex">
						I’ve loved making things for as long as I can remember, and wrote my
						first program when I was 6 years old, just two weeks after my mom
						brought home the brand new Macintosh LC 550 that I taught myself to
						type on.
					</span>
					<span className="flex">
						The only thing I loved more than computers as a kid was space. When
						I was 8, I climbed the 40-foot oak tree at the back of our yard
						while wearing my older sister’s motorcycle helmet, counted down from
						three, and jumped — hoping the tree was tall enough that with just a
						bit of momentum I’d be able to get to orbit.
					</span>
				</div>
			</div>
			<div className="flex lg:pl-20">
				<ul>
					<li className="fex">
						<a className="flex items-center">
							<BsGithub />
							<p className="ml-4">follow me</p>
						</a>
					</li>
					<li className="flex">
						<a className="">
							<p>follow me</p>
						</a>
					</li>
					<li className="flex">
						<a className="">
							<p>follow me</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
