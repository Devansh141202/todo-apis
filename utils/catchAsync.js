const catchAsync =
    (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            console.log(err.message, "error from catch async")
            next(err)
        })
    }

export { catchAsync }
