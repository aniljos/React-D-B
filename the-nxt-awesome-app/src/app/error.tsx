'use client'

type AppErrorBoundaryProps = {
    error: { message: string }
}

export default function AppErrorBoundary(props: AppErrorBoundaryProps) {

    return (

        <>
            <div className="alert alert-danger">
                Something went wrong..
               
            </div>
            <div className="alert alert-danger">
                Error Details: {props.error.message}
            </div>
        </>
    )
}