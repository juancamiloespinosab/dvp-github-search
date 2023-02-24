import { User } from "src/app/core/models/user.model";

export interface UsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}