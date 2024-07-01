declare module "react-typed" {
  import * as React from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    startDelay?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    attr?: string;
    contentType?: string;
  }

  export default class Typed extends React.Component<TypedProps> {}
}
