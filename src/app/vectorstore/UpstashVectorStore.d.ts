import { VectorStore } from "@langchain/core/vectorstores";
import { Index } from "@upstash/vector";

export class UpstashVectorStore extends VectorStore {
    constructor(embeddings: any, vectorUrl?: string, vectorToken?: string);
    index: Index;
    similaritySearchVectorWithScore(query: any, k: any, filter: any): Promise<any[][]>;
}
