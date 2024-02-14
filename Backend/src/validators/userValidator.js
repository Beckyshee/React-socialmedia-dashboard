import joi from joi;

export const userValidator = ( user ) =>
{
    const userValidatorSchema = joi.object( {
        username: joi.string().min(3).required(),
    })
}
