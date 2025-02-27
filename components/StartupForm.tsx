"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MDEditor from "@uiw/react-md-editor"
import { Button } from "./ui/button"
import { Send } from "lucide-react"


const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [pitch, setPitch] = useState("**Hello world")

  const isPending = false

  return (
    <form action={() => { }} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">Title</label>
        <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />

        {errors.title && <p className="start-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">Description</label>
        <Textarea id="description" name="description" className="startup-form_textarea" required placeholder="Startup Description" />

        {errors.description && <p className="start-form_error">{errors.tidescriptiontle}</p>}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">Category</label>
        <Input id="category" name="category" className="startup-form_input" required placeholder="Startup Category(Title, Health, Education ...)" />

        {errors.category && <p className="start-form_error">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">Image Url</label>
        <Input id="link" name="link" className="startup-form_input" required placeholder="Startup Image URL" />

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