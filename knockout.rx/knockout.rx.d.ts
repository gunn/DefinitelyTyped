/// <reference path="../knockout/knockout.d.ts"/>
/// <reference path="../rx.js/rx.js.d.ts"/>

interface KnockoutSubscribableFunctions<T> {
	toObservable(event?: string): Rx.IObservable<T>;
	toObservable<TEvent>(event: string): Rx.IObservable<TEvent>;
}

interface KnockoutObservableFunctions<T> {
	toObservableWithReplyLatest(): Rx.IObservable<T>;
}

interface KnockoutComputedFunctions<T> {
	toObservableWithReplyLatest(): Rx.IObservable<T>;
}

declare module Rx {
	interface IObservable<T> {
		toKoSubscribable(): KnockoutSubscribable<T>;
		toKoObservable(initialValue?: T): KnockoutObservable<T>;
	}
}
