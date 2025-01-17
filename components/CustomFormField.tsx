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
import Image from 'next/image'
  
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

const RenderField = ({field, props} : {field: any; props: CustomProps}) => {
    const {fieldType, iconAlt, iconSrc, placeholder} = props
    // return(
    //     <Input 
    //         type='text'
    //         placeholder={placeholder}
    //     />
    // )
    switch (fieldType) {
        case FormFieldType.Input:
            return(
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {
                        iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || "icon"}
                                className='ml-2'
                            />
                        )
                    }

                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>
                </div>
            )
            break;
    
        default:
            break;
    }
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
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />

                    <FormMessage className='shad-error' />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField