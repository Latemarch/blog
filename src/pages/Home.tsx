import React from "react";

export default function Home() {
	return (
		<div className="h-[200px] bg-zic-300 text-white text-justify">
			<h1 className="text-3xl">Motivation</h1>
			<span className="text-xl">
				Out of the box, React applications do not come with an opinionated way
				of fetching or updating data from your components so developers end up
				building their own ways of fetching data. This usually means cobbling
				together component-based state and effect using React hooks, or using
				more general purpose state management libraries to store and provide
				asynchronous data throughout their apps. While most traditional state
				management libraries are great for working with client state, they are
				not so great at working with async or server state. This is because
				server state is totally different. For starters, server state: Is
				persisted remotely in a location you do not control or own Requires
				asynchronous APIs for fetching and updating Implies shared ownership and
				can be changed by other people without your knowledge Can potentially
				become "out of date" in your applications if you're not careful Once you
				grasp the nature of server state in your application, even more
				challenges will arise as you go, for example: Caching... (possibly the
				hardest thing to do in programming) Deduping multiple requests for the
				same data into a single request Updating "out of date" data in the
				background Knowing when data is "out of date" Reflecting updates to data
				as quickly as possible Performance optimizations like pagination and
				lazy loading data Managing memory and garbage collection of server state
				Memoizing query results with structural sharing If you're not
				overwhelmed by that list, then that must mean that you've probably
				solved all of your server state problems already and deserve an award.
				However, if you are like a vast majority of people, you either have yet
				to tackle all or most of these challenges and we're only scratching the
				surface! React Query is hands down one of the best libraries for
				managing server state. It works amazingly well out-of-the-box, with
				zero-config, and can be customized to your liking as your application
				grows. React Query allows you to defeat and overcome the tricky
				challenges and hurdles of server state and control your app data before
				it starts to control you. On a more technical note, React Query will
				likely: Help you remove many lines of complicated and misunderstood code
				from your application and replace with just a handful of lines of React
				Query logic. Make your application more maintainable and easier to build
				new features without worrying about wiring up new server state data
				sources Have a direct impact on your end-users by making your
				application feel faster and more responsive than ever before.
				Potentially help you save on bandwidth and increase memory performance
			</span>
		</div>
	);
}
