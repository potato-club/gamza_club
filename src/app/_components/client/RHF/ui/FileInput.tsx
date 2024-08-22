import { ControllerRenderProps, FieldValues } from 'react-hook-form';

interface FileInputProps {
  field: ControllerRenderProps<FieldValues, string>;
  fileName: string;
}
const FileInput = ({
  ...props
}: Partial<HTMLInputElement> & FileInputProps) => {
  return (
    <div className="flex items-center gap-x-2 w-[225px]">
      <label
        className="flex px-4 py-1 font-bold bg-white text-black border border-stone-200 rounded-xl"
        htmlFor="inputFile"
      >
        업로드
      </label>
      <input
        type="file"
        id="inputFile"
        className="hidden"
        placeholder={props.placeholder}
        accept={props.accept}
        onChange={(e) => {
          if (e.target.files) {
            props.field.onChange(e.target.files[0]);
          }
        }}
      />
      <span className="w-[140px] text-ellipsis overflow-hidden whitespace-nowrap">
        {props.fileName ? props.fileName : '파일 없음'}
      </span>
    </div>
  );
};
export default FileInput;
