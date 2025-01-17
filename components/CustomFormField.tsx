import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, Form } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'
  
interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = () => {
    return(
        <Input 
            type='text'
            placeholder='John Doe'
        />
    )
}

const CustomFormField = (props: CustomProps) => {

    const {control, fieldType, name, label} = props

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                // <FormItem>
                //     <FormLabel>Username</FormLabel>
                //     <FormControl>
                //         <Input placeholder="shadcn" {...field} />
                //     </FormControl>
                //     <FormDescription>
                //         This is your public display name.
                //     </FormDescription>
                //     <FormMessage />
                // </FormItem>
                <FormItem className='flex-1'>
                    {fieldType !== FormFieldType.Checkbox && label && (
                        <FormLabel>
                            {label}
                        </FormLabel>
                    )}

                    <RenderField field={field} props={props} />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField