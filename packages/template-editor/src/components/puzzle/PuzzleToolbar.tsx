/** @jsx jsx */

import * as React from "react";
import { Grid, IconButton, Paper } from "@material-ui/core";
import { jsx } from "@emotion/core";
import {
    Add as AddQuestionIcon,
    AddPhotoAlternate as AddPhotoIcon,
    Title as AddSectionIcon,
    FileCopy as CopyToClipboardIcon,
    NoteAdd as AddGroupIcon,
    Delete as DeleteIcon,
} from "@material-ui/icons";

interface IPuzzleToolbarProps {
    right?: number;
    top?: number;

    addQuestionDisabled?: boolean;

    onAddClick(): void;
}

export const PuzzleToolbar: React.FC<IPuzzleToolbarProps> = ({ right = 0, top = 0, ...props }) => {
    return (
        <Paper
            css={theme => ({
                position: "absolute",
                right: `calc(-${theme.spacing(10)} + ${right}px)`,
                top: 0,
                transform: `translateY(${top}px)`,
                willChange: "transform",
                transition: "transform 0.3s ease-in-out",
            })}
            className="toolbar"
        >
            <Grid
                container
                direction="column"
                alignContent="center"
                css={theme => ({ padding: theme.spacing() })}
            >
                <Grid item css={theme => ({ marginBottom: theme.spacing() })}>
                    <IconButton
                        color="primary"
                        aria-label="Добавить вопрос"
                        disabled={props.addQuestionDisabled}
                        onClick={props.onAddClick}
                    >
                        <AddQuestionIcon />
                    </IconButton>
                </Grid>
                <Grid item css={theme => ({ marginBottom: theme.spacing() })}>
                    <IconButton color="primary" aria-label="Добавить группу">
                        <AddGroupIcon />
                    </IconButton>
                </Grid>
                <Grid item css={theme => ({ marginBottom: theme.spacing() })}>
                    <IconButton color="primary" aria-label="Добавить раздел">
                        <AddSectionIcon />
                    </IconButton>
                </Grid>
                <Grid item css={theme => ({ marginBottom: theme.spacing() })}>
                    <IconButton color="primary" aria-label="Скопировать">
                        <CopyToClipboardIcon />
                    </IconButton>
                </Grid>
                <Grid item css={theme => ({ marginBottom: theme.spacing() })}>
                    <IconButton color="primary" aria-label="Добавить фото">
                        <AddPhotoIcon />
                    </IconButton>
                </Grid>
                <Grid item css={theme => ({ marginBottom: theme.spacing() })}>
                    <IconButton color="primary" aria-label="Удалить элемент">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
};
