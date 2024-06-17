import { type } from "os";
import { z } from "zod";

export const UserNameValidator= z.object({
    name:z.string().min(3).max(32).regex(/^[a-zA-Z0-9]+$/),
})
export type UserNameRequest = z.infer<typeof UserNameValidator>