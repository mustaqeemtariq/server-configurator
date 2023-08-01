import { useCallback, useEffect, useState } from "react";
import { getConfiguration } from "@api/public";
import { updateConfiguration } from "@api/admin";
import { jsonParseFormData } from "@utils/admin/utils";
import ConfigForm from "./ConfigForm";

const Config = () => {
  const [config, setConfig] = useState();

  const fetchConfiguration = useCallback(async () => {
    const response = await getConfiguration();
    if (response.status === 200) {
      setConfig(response.data);
    }
  }, []);

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const editConfiguration = useCallback(async (data) => {
    const response = await updateConfiguration(data);
    if (response.status === 200) {
      alert("Configuration updated successfully");
    } else {
      alert("There was an error while updating configuration");
    }
  }, []);

  const jsonFields = [
    "payment_method",
    "contract_type",
    "contract_duration",
    "discount",
  ];
  const jsonParsedData = jsonParseFormData(config, jsonFields);

  return (
    <div className="flex flex-row p-[64px]">
      {config && (
        <ConfigForm
          primaryKeyName="configuration_id"
          data={jsonParsedData}
          jsonFields={jsonFields}
          editConfiguration={editConfiguration}
        />
      )}
    </div>
  );
};

export default Config;
