import { InputHTMLAttributes } from "react"
import { cn } from "../lib/utils"

function Input({className, ...props }: InputHTMLAttributes<HTMLInputElement> 
    & {className?: string} ) {

    return (
        <input className={cn('block w-full border border-teal-600 rounded p-3', className)}
        {...props}>
       </input>
    )
}
export default Input