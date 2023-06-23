import { useFragment } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Card from '@mui/material/Card'
import { CardContent, Checkbox, Typography } from '@mui/material'
import type {TodoListItem_todo$key} from './__generated__/TodoListItem_todo.graphql'

const TodoItemFragment = graphql`
    fragment TodoListItem_todo on Todo {
        id
        todo
        completed
        dateCreated
        dateUpdated
    }
`

// const TodoItemQuery = graphql`
//     query TodoItemQuery {
//         ...TodoItemFragment
//     }
// `

type Props = {
    todoItem: TodoListItem_todo$key
}

export default function TodoItem({todoItem}: Props) {
    const data = useFragment(
        TodoItemFragment,
        todoItem
    )

    return (
        <Card>
            <CardContent>
                <Typography>{data.todo}</Typography>
                <Checkbox checked={data.completed}/>
                <Typography sx={{ fontSize: 11 }}>Created {data.dateCreated}</Typography>
                <Typography sx={{ fontSize: 11 }}>Last updated {data.dateUpdated}</Typography>
            </CardContent>
        </Card>
    )
}