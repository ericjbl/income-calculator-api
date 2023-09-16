import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(of => User)
export class UserResolver {
    constructor(
        private userService: UserService,
    ) {}

    @Mutation(returns => User)
    async signUp(@Args({ name: 'user', type: () => CreateUserDto }) createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto)
    }

    // @Query(returns => User)
    // async logIn(@Args('username') username: string, @Args('password') pass: string) {
    //     const user = await this.userService.findOne(username)
    //     const isMacth = await bcrypt.compare(pass, user.password)
    //     if (!isMacth) {
    //         throw new UnauthorizedException();
    //     }
    //     return user
    // }

}