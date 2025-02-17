"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"
// import { FormFieldType } from "./CustomFormField"

export enum FormFieldType {
    Input = "Input",
    Select = "Select",
    Radio = "Radio",
    Checkbox = "Checkbox",
    TextArea = "TextArea",
    PhoneInput = "PhoneInput",
    Skeleton = "Skeleton",
    DatePicker = "DatePicker",
    TimePicker = "TimePicker",
    DateTimePicker = "DateTimePicker",
    FileUpload = "FileUpload",
    ImageUpload = "ImageUpload",
    VideoUpload = "VideoUpload",
    AudioUpload = "AudioUpload",
    MultiSelect = "MultiSelect",
    MultiCheckbox = "MultiCheckbox",
    MultiRadio = "MultiRadio",
    MultiFileUpload = "MultiFileUpload",
    MultiImageUpload = "MultiImageUpload",
    MultiVideoUpload = "MultiVideoUpload",
    MultiAudioUpload = "MultiAudioUpload",
}

const PatientForm = () => {

    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
        setIsLoading(true)

        try {
            const userData = { name, email, phone }

            const user = await createUser(userData)

            if (user) router.push(`/patients/${user.$id}/register`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">Hello there 👋</h1>
                    <p className="text-dark-700">Schedule your first appointment.</p>
                </section>

                <CustomFormField
                    control={form.control}
                    fieldType={FormFieldType.Input}
                    name="name"
                    label="Full Name"
                    placeholder="Dave Smith"
                    iconSrc="/assets/user1.svg"
                    iconAlt="user"
                />

                <CustomFormField
                    fieldType={FormFieldType.Input}
                    control={form.control}
                    name="emial"
                    label="Email"
                    placeholder="davesmith@gmail.com"
                    iconSrc="/assets/email.svg"
                    iconAlt="email"
                />

                <CustomFormField
                    fieldType={FormFieldType.PhoneInput}
                    control={form.control}
                    name="phone"
                    label="Phone Number"
                    placeholder="(234) 810-1234"

                />


                <SubmitButton isLoading={isLoading}>
                    Get Started
                </SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm