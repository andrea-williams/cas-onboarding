import graphql from 'babel-plugin-relay/macro'
import TodoItem from './TodoListItem'
import { useFragment } from 'react-relay'

import { Card, CardContent, Grid, Typography } from "@mui/material"

interface Props {
    query: any
}

const todoListFragment = graphql`
    fragment TodoList_query on Query {
        allTodos(first: 100) @connection(key: "TodoList_allTodos") {
            __id
            edges {
                node {
                    id
                    ...TodoListItem_todo
                }
            }
        }
    }
`

export default function TodoList(props: Props) {
    const data = useFragment(
        todoListFragment,
        props.query
    )

    const list = data.allTodos.edges.map((edge: any) => 
        <TodoItem key={edge.node.id} todoItem={edge.node} />
    )

    return (
        <Grid container direction="column">
            <Grid item>
                <Card>
                    <CardContent>
                        {list}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
