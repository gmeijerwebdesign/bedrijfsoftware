function UserForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      {" "}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow p-4">
        {" "}
        {/* Header */}{" "}
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          {" "}
          <div>
            {" "}
            <h2 className="text-xl font-semibold">Gebruiker</h2>{" "}
            <p className="text-gray-500">
              {" "}
              Jarko Barten • <span className="text-sm">Verkoopleider</span>{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex items-center space-x-2">
            {" "}
            <span className="text-gray-600">Status:</span>{" "}
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {" "}
              Actief{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex">
          {" "}
          {/* Left panel */}{" "}
          <div className="w-1/4 pr-6 border-r">
            {" "}
            <h3 className="font-semibold mb-2">Toegang Systeem</h3>{" "}
            <label className="flex items-center space-x-2">
              {" "}
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                defaultChecked
              />{" "}
              <span>Actief</span>{" "}
            </label>{" "}
          </div>{" "}
          {/* Right form */}{" "}
          <div className="flex-1 pl-6 space-y-4">
            {" "}
            {/* Gebruikersnaam & Wachtwoord */}{" "}
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <div>
                {" "}
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Gebruikersnaam{" "}
                </label>{" "}
                <input
                  type="text"
                  defaultValue="Jarko Barten"
                  className="mt-1 w-full border rounded-md p-2"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Wachtwoord{" "}
                </label>{" "}
                <input
                  type="password"
                  defaultValue="jarko"
                  className="mt-1 w-full border rounded-md p-2"
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Level */}{" "}
            <div className="w-32">
              {" "}
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                Level{" "}
              </label>{" "}
              <input
                type="number"
                defaultValue="4"
                className="mt-1 w-full border rounded-md p-2"
              />{" "}
            </div>{" "}
            {/* Afdeling & Functie */}{" "}
            <div className="grid grid-cols-2 gap-4">
              {" "}
              <div>
                {" "}
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Afdeling{" "}
                </label>{" "}
                <input
                  type="text"
                  defaultValue="Verkoop"
                  className="mt-1 w-full border rounded-md p-2"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Functie{" "}
                </label>{" "}
                <input
                  type="text"
                  defaultValue="Verkoopleider"
                  className="mt-1 w-full border rounded-md p-2"
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Contactgegevens */}{" "}
            <div className="space-y-2">
              {" "}
              <h3 className="font-semibold">Contactgegevens</h3>{" "}
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    E-mailadres{" "}
                  </label>{" "}
                  <input
                    type="email"
                    className="mt-1 w-full border rounded-md p-2"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Telefoon{" "}
                  </label>{" "}
                  <input
                    type="text"
                    className="mt-1 w-full border rounded-md p-2"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <div>
                  {" "}
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Zakelijk{" "}
                  </label>{" "}
                  <input
                    type="text"
                    defaultValue="2030"
                    className="mt-1 w-full border rounded-md p-2"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Omschrijving{" "}
                  </label>{" "}
                  <input
                    type="text"
                    defaultValue="Jarko Barten"
                    className="mt-1 w-full border rounded-md p-2"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Opmerkingen */}{" "}
            <div>
              {" "}
              <label className="block text-sm font-medium text-gray-700">
                {" "}
                Opmerkingen{" "}
              </label>{" "}
              <textarea
                className="mt-1 w-full border rounded-md p-2"
                rows={3}
              ></textarea>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer buttons */}{" "}
        <div className="flex justify-end space-x-4 border-t pt-4 mt-6">
          {" "}
          <button className="px-4 py-2 border rounded-md">
            {" "}
            Gebruiker Dupliceren{" "}
          </button>{" "}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            {" "}
            Wijzigen{" "}
          </button>{" "}
          <button className="px-4 py-2 border rounded-md">Printen</button>{" "}
          <button className="px-4 py-2 border rounded-md">Sluiten</button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default UserForm;
