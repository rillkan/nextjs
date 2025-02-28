"use client"

import { useActionState, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MDEditor from "@uiw/react-md-editor"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
import { formSchema } from "@/lib/validation"
import { z } from 'zod'

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [pitch, setPitch] = useState(() => "**Hello world")

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch
      }
      await formSchema.parseAsync(formValues);
      //const result = await createIdea(prevState, formData, pitch)
      //console.log(result)
      console.log(formValues)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors
        setErrors(fieldErrors as unknown as Record<string, string>)
        return { ...prevState, error: "Validation failed", status: "ERROR " }
      }
      return {
        ...prevState,
        error: 'an unexpected error occured',
        state: "ERROR"
      }
    }
  }

  const [state, formAction, isPending] = useActionState(handleFormSubmit, { error: "", status: "INITIAL" })

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">Title</label>
        <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />

        {errors.title && <p className="start-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">Description</label>
        <Textarea id="description" name="description" className="startup-form_textarea" required placeholder="Short Description of your startup idea" />

        {errors.description && <p className="start-form_error">{errors.tidescriptiontle}</p>}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">Category</label>
        <Input id="category" name="category" className="startup-form_input" required placeholder="Startup Category(Title, Health, Education ...)" />

        {errors.category && <p className="start-form_error">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">Image Url</label>
        <Input id="link" name="link" className="startup-form_input" required placeholder="Paste a link to your demo or promotional media" />

        {errors.link && <p className="start-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="link" className="startup-form_label">Pitch</label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20 }}
          textareaProps={{
            placeholder: "Briefly describe your idea and what problem it solves"
          }}
          previewOptions={{
            disallowedElements: ["style"]
          }}

        />

        {errors.link && <p className="start-form_error">{errors.link}</p>}

        <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
          {isPending ? "Sending pitch..." : "Submit your pitch"}
          <Send className="size-6 ml-2" />
        </Button>
      </div>
    </form>

  )
}

export default StartupForm