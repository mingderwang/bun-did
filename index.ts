import { Issuer, Verifier } from 'did-jwt';
import jwt from 'jsonwebtoken';

// Example of generating a DID and signing a JWT
async function authenticateUser(did: string, privateKey: string): Promise<string> {
    const jwtToken = await Issuer.sign({
        did: did,
        privateKey: privateKey,
        payload: {
            // User information
            sub: did,
            name: "User Name",
            // Additional claims
        },
        issuer: did,
        // Optional: Set expiration
        expiresIn: '1h'
    });

    return jwtToken;
}

// Verifying the JWT
async function verifyToken(token: string, did: string): Promise<boolean> {
    try {
        const verified = await Verifier.verifyJWT(token, {
            audience: did,
            issuer: did,
        });

        return verified;
    } catch (error) {
        console.error("Verification failed:", error);
        return false;
    }
}

// Example usage
(async () => {
    const did = "did:example:123"; // Your DID
    const privateKey = "your-private-key"; // Your private key

    // Authenticate user and get token
    const token = await authenticateUser(did, privateKey);
    console.log("Generated JWT:", token);

    // Verify the token
    const isValid = await verifyToken(token, did);
    console.log("Is token valid?", isValid);
})();

