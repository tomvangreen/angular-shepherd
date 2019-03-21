export interface AddStepsOptions {
    id: string;
    options: StepOptions;
}

export interface StepOptions {
    attachTo?: string | StepElementAttachment;
    beforeShowPromise?: () => Promise<any>;
    buttons?: StepButton[];
    canClickTarget?: boolean;
    highlightClass?: string;
    scrollTo?: boolean;
    scrollToHandler?: (el: Element) => any;
    showCancelLink?: boolean;
    title?: string;
    tippyOptions?: any;
    text?: TextTypes | (() => TextTypes);
    when?: StepWhenOptions;
}

export type TextTypes = string | string[] | Element;

export interface StepElementAttachment {
    element: string;
    on?: 'top' | 'bottom' | 'left' | 'right';
    classes?: string;
}

export interface StepButton {
    type?: 'next' | 'back' | 'cancel';
    text: string;
    classes?: string;
}

export interface StepWhenOptions {
    show?: () => any;
    'before-show'?: () => any;
    'before-hide'?: () => any;
    hide?: () => any;
    complete?: () => any;
    cancel?: () => any;
    destroy?: () => any;
}
