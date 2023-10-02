import axios, { AxiosResponse } from 'axios';

const PRISM_URL = 'http://127.0.0.1:4010';

interface Schema {
  id: string;
  type: string;
  attributes: any; // Contains questions
};

const SchemaService = {
    configureQuestionInSchema: (attributes: {}): Schema => {
      return {
        id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
        type: 'applicationForm',
        attributes: attributes
      } as Schema;
    },

    getAllSchemaData: async (): Promise<Schema> => {
      try {
        const { data } = await axios.get(`${PRISM_URL}/api/81.4788950437433/programs/qui/application-form`);
        const parsedSchema = data['data'] as Schema;
        return parsedSchema;
      } catch (error) {
        throw error;
      }
    },

    updateSchemaEntry: async (updatedSchema: {data: Schema}): Promise<void> => {
      try {
        const response: AxiosResponse<{data: Schema}> = await axios.put(`${PRISM_URL}/api/39.076821184565816/programs/dolores/application-form`, updatedSchema);
        if (response.status >= 200 && response.status <= 300) {
          console.log('Update successful!');
        } else {
          throw 'Unsuccessful PUT call for application form schema';
        }
      } catch (error) {
        throw error;
      }
    }
};

export default SchemaService;
