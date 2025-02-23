import ky from 'ky'

export default async function handler(req, res) {
    const data = await ky
        .get('https://example.com', {
        searchParams: {
            ...req.query,
        },
        })
        .json()

    res.json(data)
}
