
export interface Runtime {
    InitContext(): void
    DestroyContext(): void
}

export class StandardRuntime implements Runtime {
    public InitContext(){}
    public DestroyContext(){}
}
