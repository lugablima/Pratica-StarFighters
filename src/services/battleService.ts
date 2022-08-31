import * as apiService from "../services/apiService";

export async function createBattle(firstUser: string, secondUser: string) {
    const reposFirstUser = await apiService.getReposByUsername(firstUser);

    const reposSecondUser = await apiService.getReposByUsername(secondUser);

    // if(!reposFirstUser || !reposSecondUser) {
    //     throw { code: "Error_User_Not_Exists", message: "This user(s) is not exists" }
    // }
}