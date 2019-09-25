/** @jsx jsx */

import { jsx } from "@emotion/core";
import { Button } from "@magnit/components";
import { ICondition, IPuzzle, ISection } from "@magnit/entities";
import { AddIcon } from "@magnit/icons";
import { ClickAwayListener, Grid, Typography } from "@material-ui/core";
import { useConditions } from "hooks/condition";
import _ from "lodash";
import * as React from "react";
import { Condition } from "./Condition";

interface IConditionsProps {
    puzzle: IPuzzle;
    parent: IPuzzle | ISection;
    puzzles: Map<string, IPuzzle>;
    disabled?: boolean;
    focused?: boolean;

    onTemplateChange(): void;
}

export const Conditions: React.FC<IConditionsProps> = props => {
    const { puzzle, parent, puzzles, disabled = false, focused = true, onTemplateChange } = props;

    const [
        virtualCondition,
        questions,
        answers,
        onConditionDeleteCallback,
        onConditionChangeCallback,
        onAddConditionCallback,
        onConditionsBlur,
    ] = useConditions(puzzle, puzzles, disabled, onTemplateChange, parent);

    const { conditions } = puzzle;

    return (
        <ClickAwayListener onClickAway={onConditionsBlur}>
            <Grid
                container
                spacing={2}
                css={{ marginBottom: 0, outline: "none" }}
                alignItems="center"
            >
                {[...conditions, virtualCondition]
                    .filter<ICondition>((condition): condition is ICondition => !_.isNil(condition))
                    .map((condition, index) => (
                        <Condition
                            key={condition.id}
                            answers={answers}
                            condition={condition}
                            conditions={conditions}
                            index={index}
                            onConditionChange={onConditionChangeCallback}
                            onConditionDelete={onConditionDeleteCallback}
                            questions={questions}
                            noDeleteButton={!focused}
                        />
                    ))}
                {focused && (
                    <Grid item xs={4} css={theme => ({ marginLeft: theme.spacing(9) })}>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            onClick={onAddConditionCallback}
                            scheme="outline"
                        >
                            <AddIcon css={theme => ({ color: theme.colors.primary })} />
                            <Typography css={theme => ({ fontSize: theme.fontSize.normal })}>
                                Добавить внутреннее условие
                            </Typography>
                        </Button>
                    </Grid>
                )}
            </Grid>
        </ClickAwayListener>
    );
};

Conditions.displayName = "Conditions";
