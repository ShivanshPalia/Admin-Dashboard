import React from 'react'

type Feedback = {
    id:string;
    userName:string;
    Email:string;
    message:string;
    date:Date;
}
type Props={
    feedbackData: Feedback[]
}
const feedback: React.FC<Props> = ({feedbackData}) => {
  return (
    <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold mb-4">User Feedback</h2>
    <div className="space-y-4 overflow-y-auto max-h-96">
      
        <div
         
          className="border-b pb-4 last:border-none flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">shivansh</h3>
            <span className="text-sm text-gray-500">
              29202
            </span>
          </div>
          <p className="text-gray-700">hello ia m a guy fro south infa</p>
          <span className="text-sm text-gray-400">shohibdjbj</span>
        </div>
      
    </div>
  </div>
  )
}

export default feedback