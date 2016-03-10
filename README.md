# On The Spot!

> NOTE: This is a personal work in progress, and not something I'm looking for contributions for.

An experiment with WebRTC, WebSockets and MEAN, this is a personal project to stretch the ol' noggin and explore some of the newer technologies available.

- Angular 1.5 (master)
- [RxJS](https://github.com/Reactive-Extensions/RxJS)
- [Material Design](https://material.angularjs.org/)
- WebRTC audio with [BinaryJS](https://github.com/binaryjs/binaryjs)
- [SockJS](https://github.com/sockjs)
- [JWT](http://jwt.io/)

There are some Jeopardy! clones out there, but I haven't found any that live up to the Host/Contestant format.

## Features

Once complete, a user will be able to create a game as a **host**, and others can join or be invited as **contestants**. The host will be able to ask questions and confirm answers (no limit on audio buffer time), whereas contestants have a 5 second window once they buzz in.  Hosts will mark answers as in/correct.

Game interactions will be handled by SockJS, with channels and a basic authentication system handled by [node-token-sockjs](https://github.com/azuqua/node-token-sockjs).
