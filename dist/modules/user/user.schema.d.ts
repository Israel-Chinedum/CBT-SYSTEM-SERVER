import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    fullname?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.schema.d.ts.map