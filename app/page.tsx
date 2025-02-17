import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
        {/* todo: OTP Verification */}

        <Image 
            src="/assets/doctor.jpg" 
            height={1000}
            width={1000}
            alt="patient"
            className="side-img max-w-[50%]"
        />

        <section className="remove-scrollbar container my-auto h-full">
            <div className="sub-container max-w-[496px]">
                <Image
                    src="/assets/docease_logo.png" 
                    height={1000}
                    width={1000}
                    alt="Heart"
                    className="mb-12 h-16 w-fit"
                />

                <PatientForm />

                <div className="text-14-regular mt-20 flex justify-between">
                    <p className="justify-items-end text-dark-600 xl:text-left">© 2025 DocEase</p>
                    <Link href="/?admin=true" className="text-green-500">
                        Admin
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}
