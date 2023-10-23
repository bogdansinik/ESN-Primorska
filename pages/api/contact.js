export default function handler(req, res) {

    // TODO: Server-side validation if needed

    const body = req.body

    console.log('body: ', body)

    if (!body.name || !body.email || !body.message) {
        return res.status(400).json({ data: 'Name or email not found' , error: 1, message: 'Error'})
    }

    res.status(200).json({ data: req.body, error: 0, message: 'Success' })
}