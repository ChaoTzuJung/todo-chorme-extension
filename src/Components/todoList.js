import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class todoList extends Component {
    render() {
        return (
        <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
            >
                <List>
                    {this.props.data.map((todo, index) => (
                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                        {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                        >
                        <ListItem key={todo.id}>
                            <Icon {...provided.dragHandleProps}>drag_handle</Icon>
                            <ListItemText
                                primary={todo.name}
                            />
                            <ListItemSecondaryAction>
                            {/* 不能這樣寫 onClick={this.props.handleClick(todo.id)，因為我們要保證onClick事件是一直被trigger的 */}
                            <IconButton aria-label="Delete" onClick={() => this.props.onClickHandler(todo.id)}> 
                                <Icon>delete</Icon>
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        </div>
                        )}
                    </Draggable>
                    ))}
                </List>
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        </DragDropContext>
        )
    }
}

export default todoList;