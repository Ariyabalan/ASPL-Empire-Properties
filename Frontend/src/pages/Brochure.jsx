import React from "react";
import FormPage from "../components/ui/FormPage";

function Brochure() {
    return (
        <FormPage
            title="Request Brochure"
            fields={[
                "Name",
                "Email",
                "Phone",
                "Project",
            ]}
        />
    );
}

export default Brochure;
