import {formatMove} from "../src";
import { describe, it, expect } from 'vitest';

describe("formatMove", async () => {
    it("formats Move code", async () => {
        const input =
            `module obelisk::access_control {
use obelisk::world::{AdminCap, World};
use sui::dynamic_field as df;
`;

        const r = await  formatMove(input);
        console.log(r)
    })
})