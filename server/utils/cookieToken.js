

const cookieToken = (user, res) => {
    const Token = user.getJwtToken()

    const options = {
        expires: new Data(
            Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: 'none'
    }

    user.password = undefined
    res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = cookieToken