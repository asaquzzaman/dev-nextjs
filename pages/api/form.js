export default function handler( req, res ) {
    const body = req.body;

    return res.status( 200 ).json( body );
}