import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { checkDisableCookie, GoogleSpreadSheet, joinWaitList } from "@/lib/actions/googleSpreadSheet.actions"
import { userSchema } from "@/lib/utils"
import { CheckIcon, LucideLoaderCircle, PlusIcon } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"
import { toast, Toaster } from "sonner"

export function DialogDemo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isDisabled, setIsDisabled] = useState(false)
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const joinTheWaitlist = async () => {
        try {
            const validationResult = await validateUserInput({ name, email });
            if (!validationResult.success) {
                setEmailError(validationResult.errors)
                return
            }
            setLoading(true);
            await joinWaitList({ name, email })
            setEmail('');
            setName('');
            setLoading(false);
            setIsDisabled(true);
            setIsOpen(false)
            toast.success(`${name} Added to Waitlist`)  // Disable inputs and button after the function is called
        } catch (error) {
            toast.error(`${error}`)
        }
    }
    async function validateUserInput(data: GoogleSpreadSheet) {
        try {
            // Parse will throw an error if validation fails
            userSchema.parse(data);
            return { success: true, errors: null };
        } catch (err: any) {
            // Return the validation errors
            return { success: false, errors: err.errors[0].message };
        }
    }

    useEffect(() => {
        async function cookieCheck() {
            let res = await checkDisableCookie()
            console.log(res)
            if (res) setIsDisabled(true);
        }

        cookieCheck()
    }, [name, email])

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);
        validateName(value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };
    const validateName = (name: string) => {
        if (name.length < 3) {
            setNameError('Name must be at least 3 characters long.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };
    return (
        <Dialog  open={isOpen} onOpenChange={(state) => setIsOpen(state)} >
            <DialogTrigger asChild>
                <Button variant="secondary" className="w-full  bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white">Learn More</Button>
            </DialogTrigger>
            <DialogContent   onInteractOutside={(e) => e.preventDefault()} className="glassmorphism-modal !rounded-xl max-w-[425px] text-slate-300">
                <DialogHeader>
                    <DialogTitle>We Are Working On Something!</DialogTitle>
                    <DialogDescription className="text-slate-400">
                    Our platform is evolving, bringing you cutting-edge features to supercharge your trading.Want a sneak peek and early access? Join our waitlist and never miss out on exclusive updates!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            disabled={isDisabled}
                            onChange={handleNameChange}
                            id="name"
                            type="text"
                            // defaultValue="Pedro Duarte"
                            className={`col-span-3 ${nameError ? 'border-red-500' : ''
                                }`}
                        />
                        <div></div>
                        {nameError && <p className="text-red-500 text-sm mt-1 text-nowrap">{nameError}</p>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            disabled={isDisabled}
                            onChange={handleEmailChange}
                            type="email"
                            id="email"
                            defaultValue=""

                            className={`col-span-3 ${emailError ? 'border-red-500' : ''
                                }`}
                        />
                        <div></div>
                        {emailError && <p className="text-red-500 text-sm mt-1 text-nowrap">{emailError}</p>}
                    </div>
                </div>
                <Toaster richColors />
                <DialogFooter className="flex justify-end" >
                    <Button disabled={isDisabled || loading} type="submit" onClick={joinTheWaitlist} className=" bg-white ml-auto sm:mx-0 w-1/2 sm:w-auto bg-opacity-20 hover:bg-opacity-30 text-white border-white"> {loading ? (
                        <LucideLoaderCircle className="animate-spin" />  // Show loader while loading
                    ) : isDisabled ? (
                        <>
                            Added To Waitlist <CheckIcon />
                        </>
                    ) : (
                        <>
                            Join the waitlist <PlusIcon />
                        </>
                    )}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
