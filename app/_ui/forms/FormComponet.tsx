
import React, { FC } from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputAttributes {
  type?: string; // مثل: text, email, number...
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  error?:string,
  // Number/date attributes
  min?: number | string;
  max?: number | string;
  step?: number;
  id?:string,
  // File input attributes
  accept?: string;
  multiple?: boolean;

  // Autocomplete and input control
  autoComplete?: string;
  autoFocus?: boolean;
  spellCheck?: boolean;
  inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email' | 'url' | 'search' | 'none';

  // Pattern & size
  pattern?: string;
  size?: number;
  maxLength?: number;
  minLength?: number;

  // Form attributes
  form?: string;
  formAction?: string;
  formMethod?: 'get' | 'post';
  formTarget?: '_blank' | '_self' | '_parent' | '_top';

  // Datalist support
  list?: string;

  // Event handlers
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputProp extends InputAttributes {
    label?:string
    className?:string
}
const FormComponent:FC<InputProp> = ({label,className,error,...rest}) => {
  return (
    <div className="grid gap-1">
                <div className='grid gap-2'>
                   {label&& <Label htmlFor="name-1">{label}</Label>}
                  <Input  {...rest} className={`${className}`} />
                </div>
                {error&& <p className='p-1 text-red-600 text-sm'>{error}</p>}
    </div>
  )

}

export default FormComponent
