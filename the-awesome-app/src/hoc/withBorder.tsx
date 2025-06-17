
// HOC: function that receives a component and return a new component

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withBorder(Component: any){

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function WithBorder(props: any){

        return (
            <div style={{border: '2px solid blue', margin: '5px', padding: '7px'}}>
                <Component {...props}/>
            </div>
        )
    }
}