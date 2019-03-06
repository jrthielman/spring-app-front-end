import { Component, HostBinding } from '@angular/core';
import {
    AnimationTriggerMetadata,
    trigger,
    state,
    style,
    animate,
    transition,
    group
    // ...
} from '@angular/animations';

export const openError: AnimationTriggerMetadata = trigger('openError', [
    state('in', style({
      height: 'initial',
      transform: 'translateX(0) skew(0, 0)', opacity: 1
    })),
    transition('void => *', [
      style({ height: 0, transform: 'translateX(100px) skew(100deg, 0)', opacity: 0 }),
      group([
        animate('.4s .1s ease', style({
          transform: '*',
          height: 'initial'
        })),
        animate('.5s .1s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      group([
        animate('.5s .2s ease', style({
          transform: 'translateX(100px) skew(100deg, 0)',
          height: 0
        })),
        animate('.4s 0.1s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]);