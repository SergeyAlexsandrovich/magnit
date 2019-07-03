/** @jsx jsx */

import * as React from "react";
import { jsx } from "@emotion/core";
import { IPuzzleFactory, IPuzzleFactoryProps } from "services/item";
import { EditorContext } from "TemplateEditor";
import { DateAnswerPuzzle } from "./DateAnswerPuzzle";

export class DateAnswerFactory implements IPuzzleFactory {
    createPuzzle({ puzzle, focused, index }: IPuzzleFactoryProps): React.ReactNode {
        return (
            <EditorContext.Consumer>
                {() => <DateAnswerPuzzle questionFocused={focused} id={puzzle.id} index={index} />}
            </EditorContext.Consumer>
        );
    }
}