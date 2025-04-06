export namespace AstController{
  export interface IPropertyData{
    PropertyName: string;
    PropertyType: string;
    PropertyValue: unknown;
    IsScriptable: boolean;
  }

  export interface IInstanceData{
    Instance: Instance;
    Id: string;
    ParentId: string;
    Children: string[];

    InstanceName: string;
    ClassName: string;
    Level: number;
    IsCreatable: boolean;

    Properties: IPropertyData[];
  }

}