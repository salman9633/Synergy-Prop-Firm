import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const userSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 2 characters long" }).max(50, { message: "Name is too long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

