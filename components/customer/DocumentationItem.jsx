const DocumentationItem = ({
  title,
  method,
  endpoint,
  response,
  description,
  access,
}) => {
  return (
    <div className="px-[72px] py-[48px]">
      <div className="flex flex-col gap-x-4 gap-y-5 justify-between">
        <h2 className="text-3xl">{title}</h2>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <h2 className="text-3xl">Request Method</h2>
        <p className="text-lg capitalize">{method}</p>
        <h2 className="text-3xl">Endpoint</h2>
        <p className="text-lg">{endpoint}</p>
        {title === "Get Orders" && (
          <>
            <h2 className="text-3xl">Request Params</h2>
            <p className="text-lg">Customer id has to be provided to get orders for that respective customer.</p>
          </>
        )}
        <h2 className="text-3xl">Response</h2>
        <div className="bg-gray-800 p-2 text-white">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
        <h2 className="text-3xl">Status Code</h2>
        <div className="bg-slate-300 text-white flex flex-col gap-y-2 p-3 text-lg">
          <p className="text-black">
            The api returns the following status codes:
          </p>
          <ul className="pl-6">
            <li className="text-green-500 list-disc">200: Success</li>
            <li className="text-red-500 list-disc">400: Bad Request</li>
            <li className="text-red-500 list-disc">401: Unauthorized</li>
            <li className="text-red-500 list-disc">500: Server Error</li>
          </ul>
        </div>
        <h2 className="text-3xl">Access</h2>
        <div>
          <p className="text-lg">{access}</p>
        </div>
      </div>
      {title === "Get Orders" && (
        <div className="mt-10 flex flex-col gap-x-4 gap-y-5 justify-between">
          <h2 className="text-3xl">Create Orders</h2>
          <p className="text-lg">
            This api can be called to create your orders.
          </p>
          <h2 className="text-3xl">Request Method</h2>
          <p className="text-lg capitalize">Post</p>
          <h2 className="text-3xl">Endpoint</h2>
          <p className="text-lg">/api/public/order</p>
          <h2 className="text-3xl">Payload</h2>
          <div className="bg-gray-800 p-2 text-white">
            <pre>
              {JSON.stringify(
                {
                  order: {
                    cpu: {
                      id: 1,
                      quantity: 1,
                    },
                    disks: [
                      {
                        id: 2,
                        quantity: 1,
                      },
                      {
                        id: 3,
                        quantity: 1,
                      },
                    ],
                    ram: {
                      id: 1,
                      quantity: 1,
                    },
                    gpu: {
                      id: 1,
                      quantity: 1,
                    },
                    uplink: {
                      id: 1,
                      quantity: 1,
                      label: "Fair Use 50TB",
                    },
                    os: {
                      id: 1,
                      quantity: 1,
                      version: "CentOS 7",
                    },
                    customer_email: "test@gmail.com",
                    discount_level: "first_server",
                    contract_type: "dedicated_server",
                    contract_duration: 1,
                    payment_method: "bank_transfer",
                    comments: "test",
                    customer_no: "1234",
                  },
                },
                null,
                2
              )}
            </pre>
          </div>
          <h2 className="text-3xl">Response</h2>
          <div className="bg-gray-800 p-2 text-white">
            <pre>
              {JSON.stringify(
                {
                  message: "Order created successfully",
                  order: {
                    created_timestamp: "2023-09-28T17:32:37.886Z",
                    modified_timestamp: "2023-09-28T17:32:37.886Z",
                    order_id: 77,
                    cpu: "1x Xeon E3-1245 v6",
                    disks:
                      '[{"quantity":1,"size":"3","unit":"TB HDD","storage":"SATA","is_premium":"false"},{"quantity":1,"size":"8","unit":"TB HDD","storage":"SATA","is_premium":"false"}]',
                    ram: "1x 16GB DDR4 RAM",
                    gpu: "1x Nvidia GeForce RTX 2060",
                    uplink: "1x 1Gbit/s - Fair Use 50TB (17 €)",
                    os: "CentOS 7",
                    customer_email: "test@gmail.com",
                    discount_level: "first_server",
                    contract_type: "dedicated_server",
                    contract_duration: 1,
                    payment_method: "bank_transfer",
                    comments: "test",
                    customer_no: "1234",
                    setup_cost: 8.32,
                    monthly_cost: 149.15,
                  },
                },
                null,
                2
              )}
            </pre>
          </div>
          <h2 className="text-3xl">Status Code</h2>
          <div className="bg-slate-300 text-white flex flex-col gap-y-2 p-3 text-lg">
            <p className="text-black">
              The api returns the following status codes:
            </p>
            <ul className="pl-6">
              <li className="text-green-500 list-disc">200: Success</li>
              <li className="text-red-500 list-disc">400: Bad Request</li>
              <li className="text-red-500 list-disc">401: Unauthorized</li>
              <li className="text-red-500 list-disc">500: Server Error</li>
            </ul>
          </div>
          <h2 className="text-3xl">Access</h2>
          <div>
            <p className="text-lg">{access}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentationItem;
