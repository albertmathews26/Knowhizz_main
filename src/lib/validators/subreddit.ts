
import {z} from "zod"
export const SubredditValidator=z.object({
    name: z.string().min(3).max(21),
})
export const SubredditSubscriptionValidator= z.object({
    subredditId: z.string()
})
export type CreateSubredditPayLoad =z.infer <typeof SubredditValidator>
export type SubcribeToSubredditPayLoad =z.infer <typeof SubredditSubscriptionValidator>