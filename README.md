# React useEffect Cleanup Issue
This repository demonstrates a common issue with the `useEffect` hook in React: improper cleanup of asynchronous operations.  The buggy component demonstrates an incomplete cleanup function within `useEffect`. This could lead to memory leaks or unexpected behavior in certain scenarios, especially when dealing with timers, network requests, or subscriptions.

The solution showcases how to correctly clean up these asynchronous actions using a return function within `useEffect`.

## How to reproduce
1. Clone this repo.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output and component behavior.