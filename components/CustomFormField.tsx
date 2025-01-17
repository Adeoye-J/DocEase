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
    fieldType: FormFieldType
}

const CustomFormField = ({control, fieldType, name}: CustomProps) => {
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
                    {fieldType !== FormFieldType.Checkbox && label (
                        <FormLabel>
                            {label}
                        </FormLabel>
                    )}
                </FormItem>
            )}
        />
    )
}

export default CustomFormField